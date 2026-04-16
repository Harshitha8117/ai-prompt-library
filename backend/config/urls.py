from django.urls import path, include
from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "API is running"})

urlpatterns = [
    path('', home),              # 👈 add this
    path('prompts/', include('prompts.urls')),
]