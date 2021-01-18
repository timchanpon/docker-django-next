from django.urls import path

from . import views

app_name = 'todos'
urlpatterns = [
    path('list', views.list_todo),
    path('create', views.create_todo),
    path('update', views.update_todo),
]
