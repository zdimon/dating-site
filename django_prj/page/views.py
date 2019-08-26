from django.shortcuts import render
import requests
def index(request) -> str:
    ''' 
        Main page 

        Keyword arguments:

        ...code:

            code 

        :param `*args`: The variable arguments are used for ...

        :param `**kwargs`: The keyword arguments are used for ...

        @param script: Script to check whether running

        TODO: Add condition for when val is None

    Attributes
    ----------
    says_str : str
        a formatted string to print out what the animal says
    name : str
        the name of the animal
    sound : str
        the sound that the animal makes
    num_legs : int
        the number of legs the animal has (default 4)

    Methods
    -------
    says(sound=None)
        Prints the animals name and what sound it makes

    '''
    return render(request,'index.html')
