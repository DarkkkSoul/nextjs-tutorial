Why use Parallel Routes in this project?
You’re building the classic UX pattern:

A grid/list page (the “gallery”)
Clicking an item opens a modal overlay on top of the gallery
The URL still changes to something shareable (like /3)
If you refresh /3 or open it in a new tab, you should get a full page detail view, not a modal (because there’s no “background page” to overlay)
Parallel + Intercepting Routes is exactly the Next.js App Router solution for this.

What parallel routes solve (the real problem)
Without parallel routes, you generally must choose one:

Option A: /[id] is a full page (good for deep-linking), but you can’t naturally render it as a modal while keeping the gallery page visible behind it.
Option B: Use client state for modal (open/close state), but then deep links and refresh behavior gets messy.
Parallel routes give you both:

Deep linkable URL
Modal overlay UI when navigating from within the app
Full page UI when loading directly
How your project is structured (what each folder means)
Your photo/src/app contains:

page.tsx
The gallery page at /
[id]/page.tsx
The full page detail route at /:id
This is what should render when you load /3 directly or refresh.
modal/(.)[id]/page.tsx
This is the intercepting route for showing the same /:id content, but as a modal overlay when you navigated from the gallery.
layout.tsx with props { children, modal }
This defines a slot called modal.
Next will render:
children = the normal page content (gallery or full page)
modal = whatever the @modal parallel route resolves to for the current URL
Key idea: @modal is a “slot”, not a URL segment
@modal does not appear in the URL. It’s only a layout slot name.

So you can be on URL /3, and Next can render:

children from one route tree
modal from another route tree
at the same time.

“Intercepted route should be out of @modal right?” — how it works
What (.) means
(.) means: intercept a sibling segment at the same level.

So this:

app/@modal/(.)[id]/page.tsx
means:

When the URL is /:id
And Next decides to fill the @modal slot
It will render this modal page instead of navigating away from the current page
When does Next choose the intercepting route?
In practice:

Client navigation from / to /3 (clicking a <Link href="/3">)
Next keeps rendering the “background” route (your gallery /)
And fills the @modal slot using modal/(.)[id]
Result: you see the modal overlay on top of the gallery
Direct load/refresh at /3
There is no “previous background page” from client navigation
Next renders the normal full page route: [id]/page.tsx
Usually the @modal slot becomes empty / fallback
Result: full page details (not modal)
This is the intended UX: modal only when it makes sense (in-app navigation).

Mental model: what renders on /3 in each scenario
A) You click from gallery (/ -> /3)
children: stays as the gallery (page.tsx)
modal: becomes modal/(.)[id]/page.tsx
You get: gallery behind + modal on top
B) You open /3 directly
children: becomes [id]/page.tsx (full page)
modal: typically nothing (unless you define a default for it)
You get: full page detail
What is “needed” to make this pattern work cleanly
1) Layout must declare the slot
Your layout.tsx must accept:

children
modal
…and render both (you already do).

2) A normal full page route must exist
You need [id]/page.tsx for direct loads. (You have it.)

3) An intercepting route for the modal must exist
You need modal/(.)[id]/page.tsx to intercept /:id during client navigation. (You have it.)

4) Modal should have a close UX
Typical pattern:

Clicking backdrop closes (Link back to /)
Or a close button that routes back
(You can implement it inside Modal component.)

Important correction (since you changed it back)
In App Router, params is not a Promise. It should be:

ts
{ params: { id: string } }
If you keep it as Promise, it may “seem to work” in some cases but it’s not the correct contract and can break typing and behavior.

