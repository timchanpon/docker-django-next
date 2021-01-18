from datetime import datetime

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_jwt.views import ObtainJSONWebToken

from django.conf import settings

from .serializers import UserSerializer, UserWithTodosSerializer

jwt_config = getattr(settings, 'JWT_AUTH')


class Login(ObtainJSONWebToken):

    def post(self, request, *args, **kwargs):
        delta = jwt_config.get('JWT_EXPIRATION_DELTA')
        expiration = datetime.utcnow() + delta

        response = super().post(request)
        response.set_cookie(
            request.data.get('isAuthCookieName'),
            True,
            expires=expiration,
        )

        return response


class Logout(APIView):

    def post(self, request):
        cookie = jwt_config.get('JWT_AUTH_COOKIE')
        check_key = request.data.get('isAuthCookieName')
        removal_targets = [
            (cookie, None),
            (check_key, False),
        ]

        response = Response()

        for target in removal_targets:
            response.set_cookie(*target, max_age=0)

        return response


class UserData(APIView):

    def get(self, request):
        with_todos = request.query_params.get('withTodos') == 'true'
        serializer = UserWithTodosSerializer if with_todos else UserSerializer

        data = serializer(request.user).data
        res_data = {
            'name': data.get('username'),
            'email': data.get('email'),
        }

        if with_todos:
            res_data.update({ 'todos': data.get('todos') })

        return Response(res_data)


login = Login.as_view()
logout = Logout.as_view()
user_data = UserData.as_view()
