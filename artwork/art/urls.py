from django.urls import  path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('artwork/', views.artwork, name='artwork'),
    path('sign-up/', views.register, name='sign-up'),
    path('sign-in/', views.login, name='sign-in'),
    path('settings/', views.settings, name='settings'),
    path('artwork/logout/', views.logout, name='logout')
]