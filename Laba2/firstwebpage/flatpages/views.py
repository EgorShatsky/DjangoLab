from django.shortcuts import render
from django import template

def home(request):
    return render(request, 'templates/static_handler.html')


