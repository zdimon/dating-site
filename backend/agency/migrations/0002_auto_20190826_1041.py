# Generated by Django 2.2.4 on 2019-08-26 10:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('agency', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agency',
            name='name',
            field=models.TextField(help_text='Name of agency', max_length=250),
        ),
    ]
