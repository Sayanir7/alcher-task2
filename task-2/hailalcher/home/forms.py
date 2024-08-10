from django import forms
from home.models import Contact

class UserForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'username', 'email']
        
        error_messages = {
            'username': {
                'unique': "This username is already taken. Please choose another one.",
            },
            'email': {
                'unique': "This email is already registered. Please use a different email.",
            },
        } 

        widgets = {
             'name': forms.TextInput(attrs={'placeholder': 'What is your name?'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Enter your email'}),
            'username': forms.TextInput(attrs={'placeholder': 'Username'}),
        }