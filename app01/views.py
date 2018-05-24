from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'main/install.html')


def config(request):
    return render(request, 'main/idc.html')
