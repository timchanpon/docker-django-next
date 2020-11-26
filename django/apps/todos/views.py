from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Todo
from .serializers import TodoSerializer


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


create_todo = CreateTodo.as_view()
update_todo = UpdateTodo.as_view()
