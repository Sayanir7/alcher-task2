from django.shortcuts import render, HttpResponse, redirect, get_object_or_404
from home.models import Contact
from home.forms import UserForm

# Create your views here.

def index(request):
    users=Contact.objects.all()
    form = UserForm()
    return render(request, 'index.html',{'form':form,'users':users})

def users(request):
    if request.method=="POST":
        # name = request.POST.get('name')
        # username = request.POST.get('username')
        # email = request.POST.get('email')
        

        # contact = Contact(name=name, username=username, email=email)
        # contact.save()
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(index)
    else:
        form = UserForm()

    return redirect(index)

def delete_user(request, id):
    obj = get_object_or_404(Contact, id=id)
    obj.delete()
    return redirect(index)


def edit_user(request, id):
    user = get_object_or_404(Contact, id=id)
    if request.method=="POST":
        form = UserForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect(index)
    else:
        form = UserForm(instance=user)
    return render(request, 'edit_user.html', {'form':form, 'user':user})
