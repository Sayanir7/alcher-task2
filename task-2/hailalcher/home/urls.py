from django.contrib import admin
from django.urls import path

from home import views


urlpatterns = [
    path("", views.index, name='home'),
    path("users", views.users, name='home' ),
    path('edit-user/<int:id>/', views.edit_user, name='edit_user'),
    path("delete/<int:id>/",views.delete_user, name='delete_user')
]
