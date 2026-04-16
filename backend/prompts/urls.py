from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_prompts),
    path('<uuid:id>/', views.get_prompt),
    path('create/', views.create_prompt),
]