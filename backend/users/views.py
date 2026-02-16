from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def tournament_list(request):
    data = [
        {"id": 1, "name": "Summer League", "location": "Delhi", "prize": "50000"},
        {"id": 2, "name": "Night Trophy", "location": "Mumbai", "prize": "100000"}
    ]
    return Response(data)


@api_view(['POST'])
def login_view(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user:
        return Response({"message": "Login successful"})
    else:
        return Response({"error": "Invalid credentials"}, status=400)
