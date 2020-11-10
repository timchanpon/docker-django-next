from rest_framework.views import APIView
from rest_framework.response import Response


class UserData(APIView):

	def get(self, request):
		data = {
			'name': request.user.username,
			'email': request.user.email,
		}

		return Response(data)
