# Generated by Django 3.1.2 on 2021-01-25 15:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('participants', '0002_auto_20210125_1554'),
        ('pairing', '0002_auto_20210122_1621'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pair',
            name='learner',
            field=models.ForeignKey(limit_choices_to={'is_learner': True}, on_delete=django.db.models.deletion.RESTRICT, related_name='learner_pairing', to='participants.participant'),
        ),
        migrations.AlterField(
            model_name='pair',
            name='mentor',
            field=models.ForeignKey(limit_choices_to={'is_mentor': True}, on_delete=django.db.models.deletion.RESTRICT, related_name='mentor_pairing', to='participants.participant'),
        ),
    ]