---
description: An installation/customization guide for the SkyFactions-web interface.
---

# SkyFactions-web

>[!NOTE]
>This section is still a work-in-progress, as the web module is unfinished.

This guide is written out-of-the-box for Ubuntu 22.04. If you use a different distro, such as Debian 12, you will need to do some research about how to install the dependencies.

## Dependencies

* PHP 8.1+ and MySQL/MariaDB

MariaDB comes pre-installed with Ubuntu 22.04. If you use a different distro, you will need to install a database server manually.

```
sudo apt update 
sudo apt install php-fpm php-mysql
```

* A webserver. Nginx is recommended, but Caddy or Apache will work.

```
apt install nginx
```

* Certbot, to generate SSL certificates

```
apt install certbot python3-certbot-nginx
```

* Open ports to listen on. These are the default ports for the services you need to install:
  * Nginx - 80 & 443
  * MySQL/MariaDB - 3306 (if you are hosting your Minecraft server on another machine, the port needs to be open there as well!)

## Installation

First, git clone the repository to download all the necessary files. On Ubuntu, `/home/ubuntu` isn't a bad directory to install it in, but you may want to create a new directory like `tools` or something and `cd` into it.

```
git clone https://github.com/JerichoTorrent/SkyFactions-web.git
cd SkyFactions-web/web-interface
```

After installing the necessary files, you can use a text editor like `nano` to edit `db_connect.php`

```
apt update
apt install nano
nano db_connect.php
```

Using `nano`, input your database connection details. This MUST be the database that SkyFactionsReborn is configured to use, otherwise we have no way to get the data. After editing, use `ctrl+x` and press `y` to save the file.

You can change any other files like `styles.css` to make the website look pretty like you see fit. It's all up to you how you want it to look, but it's not recommended to change the other PHP files or you may break something.

## Webserver Configuration

For this section we will be using Nginx as an example. First, make sure you set up an A record with your domain so you can visit the page in your browser. For example, create an A record for `sky.example.com` and set the content to use your IP from the server where SkyFactions-web is installed. You can find your IP address with `ip add`

Next, `nano /etc/nginx/sites-available/sky.example.com` (change the domain to your actual domain.)

Your Nginx config should look something like this:

```
server {
    server_name sky.example.com;

    # Root directory for the web files
    root /home/ubuntu/SkyFactions-web/web-interface;
    index index.php index.html index.htm;

    # Access and error logs
    access_log /var/log/nginx/skyfactions_access.log;
    error_log /var/log/nginx/skyfactions_error.log;

    # Serve static files directly
    location / {
        try_files $uri $uri/ =404;
    }

    # PHP file handling
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.3-fpm.sock; # Adjust PHP version as necessary
    }

}
```

Now we need to symlink your sites-available with sites-enabled, so any changes are reflected. You can easily do that with:\
&#x20;`ln -s /etc/nginx/sites-available/sky.example.com /etc/nginx/sites-enabled/`

Once your changes are complete, run `systemctl restart nginx`

At this point, you can run a quick check in your browser to see if the site is accessible at `http://<your ip address>/index.php`

## Certbot

Now, we will generate an SSL certificate for the site you created. After making sure certbot is installed, simply run this command:

```
sudo certbot --nginx -d sky.example.com
```

If the certificate creation is successful, your site should be up and running! Head to your domain in your browser and come back to this guide if anything went wrong, or you get any errors.

## Notes

* Use your actual domain. Don't use example.com. You obviously don't own that domain.
* If you use a different distro (or God forbid you're doing this on Windows) you need to install the dependencies manually. Google is your friend here. Keep in mind if you are trying to self-host this site, your home network just became a target for DDoS attacks!
* If you get an error 404, your webserver config is incorrect.
* If you get a 502 bad gateway, again, your webserver config is incorrect.
* If you get an http error on one of the sub pages (anything other than index.php), check your browser console for details, but you likely made a mistake with `db_connect.php` or messed up the functions in one of the other PHP files.
