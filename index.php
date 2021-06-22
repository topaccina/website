<?php
// composer autoloader for required packages and dependencies
require_once('vendor/autoload.php');

/** @var \Base $f3 */
$f3 = \Base::instance();

// Load configuration
$f3->config('config.ini');

if ((float)PCRE_VERSION<8.0)
    trigger_error('PCRE version is out of date');

    $f3->route('GET /',
        function($f3) {
            $f3->set('TITLE','Home');
            $f3->set('page','de/home/');
            echo Template::instance()->render('de/layout.htm');
        }
    );

$f3->route('GET /de',
    function($f3) {
        $f3->set('TITLE','Home');
        $f3->set('page','de/home/');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/about',
    function($f3) {
        $f3->set('TITLE','About');
        $f3->set('page','de/about');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/roadmap',
    function($f3) {
        $f3->set('TITLE','Roadmap');
        $f3->set('page','de/roadmap');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/legal',
    function($f3) {
        $f3->set('TITLE','Legal');
        $f3->set('page','de/legal');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/privacy',
    function($f3) {
        $f3->set('TITLE','Privacy Policy');
        $f3->set('page','de/privacy');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/contact',
    function($f3) {
        $f3->set('TITLE','Contact');
        $f3->set('page','de/contact');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/faq',
    function($f3) {
        $f3->set('TITLE','FAQ');
        $f3->set('page','de/faq');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/blog',
    function($f3) {
        $f3->set('TITLE','FAQ');
        $f3->set('page','de/blog');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /de/proof',
    function($f3) {
        $f3->set('TITLE','Mittelherkunftsnachweis');
        $f3->set('page','de/proof');
        echo Template::instance()->render('de/layout.htm');
    }
);

////////////////////////////////////////////////////////////////////EN/////////////////////////////////////////////////////////



$f3->route('GET /en',
    function($f3) {
        $f3->set('TITLE','Empower the DeFiChain!');
        $f3->set('page','en/home/');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en',
    function($f3) {
        $f3->set('TITLE','Home');
        $f3->set('page','en/home/');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/about',
    function($f3) {
        $f3->set('TITLE','About');
        $f3->set('page','en/about');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/roadmap',
    function($f3) {
        $f3->set('TITLE','Roadmap');
        $f3->set('page','en/roadmap');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/legal',
    function($f3) {
        $f3->set('TITLE','Legal');
        $f3->set('page','en/legal');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/privacy',
    function($f3) {
        $f3->set('TITLE','Privacy Policy');
        $f3->set('page','en/privacy');
        echo Template::instance()->render('en/layout.htm');
    }
);


$f3->route('GET /en/country',
    function($f3) {
        $f3->set('TITLE','High Risk Countries');
        $f3->set('page','en/country');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /de/country',
    function($f3) {
        $f3->set('TITLE','High Risk Countries');
        $f3->set('page','de/country');
        echo Template::instance()->render('de/layout.htm');
    }
);

$f3->route('GET /en/contact',
    function($f3) {
        $f3->set('TITLE','Contact');
        $f3->set('page','en/contact');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/faq',
    function($f3) {
        $f3->set('TITLE','FAQ');
        $f3->set('page','en/faq');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/blog',
    function($f3) {
        $f3->set('TITLE','FAQ');
        $f3->set('page','en/blog');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->route('GET /en/proof',
    function($f3) {
        $f3->set('TITLE','Proof of Origin of Funds');
        $f3->set('page','en/proof');
        echo Template::instance()->render('en/layout.htm');
    }
);

$f3->run();
