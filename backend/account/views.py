from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response

class InitApp(APIView):
    """
       Initialization
    """
    def get(self, request, format=None):
        return Response({'status': 0, 'message': 'Ok'})