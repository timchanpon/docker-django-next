from users.models import User

from django.db import models


class Todo(models.Model):
	user = models.ForeignKey(
		User,
		related_name='todos',
		on_delete=models.CASCADE,
	)

	body = models.CharField(max_length=20)

	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	class Meta:
		db_table = 'todos'

	def __str__(self):
		return self.body
