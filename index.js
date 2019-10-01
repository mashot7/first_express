const express = require('express');
const app = express();
app.use(express.json);
const courses = [
	{id: 1, name: 'course 1'},
	{id: 2, name: 'course 2'},
	{id: 3, name: 'course 3'},
];
const port = process.env.PORT || 3000;

// PORT
app.post('/api/courses', (req, res) => {
	const course = {
		id: courses.id + 1,
		name: req.body.name
	};
	courses.push(course);
	res.send(course);
});
app.listen(port, () => console.log(`Listening on port ${port}...`));
