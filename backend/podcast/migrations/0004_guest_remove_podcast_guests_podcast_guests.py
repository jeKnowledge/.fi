# Generated by Django 4.1.7 on 2023-03-26 00:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("podcast", "0003_rename_guest_podcast_guests_remove_podcast_image_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Guest",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("socials", models.CharField(max_length=255)),
            ],
        ),
        migrations.RemoveField(
            model_name="podcast",
            name="guests",
        ),
        migrations.AddField(
            model_name="podcast",
            name="guests",
            field=models.ManyToManyField(to="podcast.guest"),
        ),
    ]