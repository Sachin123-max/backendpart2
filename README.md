# Employee Task Dashboard - integration notes

This is a React/Vite frontend using your existing backend endpoints:

- `GET http://localhost:5000/api/crm/tasks`
- `GET http://localhost:5000/api/helpdesk/tasks`

## Install dependencies

```bash
npm install lucide-react
```

If you are creating a fresh Vite app, also install React and Vite as usual. Copy the files in `src/` into your project's `src/` directory. Keep your existing backend unchanged.

## Configure the backend URL

Copy `.env.example` to `.env` and set `VITE_API_BASE_URL` to the backend origin. Restart the Vite dev server after changing `.env`.

## Supported API response shapes

Each endpoint may return an array directly or one of these shapes:

```json
[{"id":"1","title":"Example task","status":"Pending","priority":"High","dueDate":"2026-10-30T12:00:00Z","assignedTo":"Aman","url":"https://example.com/task/1"}]
```

```json
{"tasks":[{"id":"1","title":"Example task"}]}
```

```json
{"data":{"tasks":[{"id":"1","title":"Example task"}]}}
```

Common task fields are mapped automatically: `title`/`taskName`/`subject`, `assignedTo`/`assignee`/`employee`, `dueDate`/`deadline`/`due_date`, and `url`/`link`/`sourceUrl`.

For clickable task links, the API must provide an actual `http://` or `https://` URL. The frontend intentionally does not invent source-app URLs.

## Important behavior

- A failed CRM request does not prevent Helpdesk tasks from rendering, and vice versa.
- Filters work locally on the combined task list.
- Deadline/priority sorting is computed locally.
- Changing a status in this frontend is local-only because no backend update endpoint was specified. Connect your existing PATCH/PUT endpoint if one exists.
- If your backend uses different route paths, change only the paths in `src/services/taskService.js`.
