# Generated by Django 3.1.2 on 2020-10-13 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('participants', '0003_auto_20201013_1547'),
    ]

    operations = [
        migrations.AddField(
            model_name='participant',
            name='comments',
            field=models.TextField(blank=True, help_text="Open comments from the participant's enrollment"),
        ),
        migrations.AddField(
            model_name='participant',
            name='manager',
            field=models.CharField(default='not given', help_text="The participant's manager's name.", max_length=512),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='participant',
            name='track_change',
            field=models.BooleanField(help_text='Whether the participant is interested in changing tracks (between IC and Manager)', null=True),
        ),
    ]