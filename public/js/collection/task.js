var app = app || {};

(function()
{
	task = Backbone.Collection.extend({
		url: '/task',
		model: app.TaskModel,
		ByListID: function(id)
		{
			filtered = this.filter(function (tasks) {
	            return tasks.get("_list") === id;
	        });
	        return new task(filtered);
		}
	});

	app.Tasks = new task();
})()