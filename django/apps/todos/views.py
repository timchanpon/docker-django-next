from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import TodoSerializer


class CreateTodo(APIView):

	def post(self, request):
		context = { 'user': request.user }
		todo = TodoSerializer(data=request.data, context=context)
		is_valid = todo.is_valid(raise_exception=True)

		if is_valid:
			todo.save()

		return Response({ 'is_valid': is_valid })


create_todo = CreateTodo.as_view()
