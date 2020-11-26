from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


class ListTodo(APIView):

	def get(self, request):
		user = request.user
		todos = Todo.objects.filter(user=user)
		serializer = TodoSerializer(todos)

		return Response({ 'todos': serializer.data })


class CreateTodo(APIView):

	def post(self, request):
		serializer = TodoSerializer(
			data=request.data,
			context={ 'user': request.user },
		)
		is_valid = serializer.is_valid(raise_exception=True)

		if is_valid:
			serializer.save()

		return Response({ 'isValid': is_valid })


class UpdateTodo(APIView):

	def post(self, request):
		todo_id = request.data.get('id')
		serializer = TodoSerializer(
			Todo.objects.get(pk=todo_id),
			data=request.data,
		)
		is_valid = serializer.is_valid()

		if is_valid:
			serializer.save()

		return Response({ 'isValid': is_valid })


list_todo = ListTodo.as_view()
create_todo = CreateTodo.as_view()
update_todo = UpdateTodo.as_view()
