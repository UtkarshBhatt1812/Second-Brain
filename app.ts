import {Hono} from 'hono'
import routes from './routes';
const app = new Hono();
app.get('/', (c) => c.text('Hello Bun!'))


app.route('/api/v1',routes)
export default app