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
        $f3->set('TITLE','Empower the DeFiChain!');
        $f3->set('page','home');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /home',
    function($f3) {
        $f3->set('TITLE','Home');
        $f3->set('page','home');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /about',
    function($f3) {
        $f3->set('TITLE','About');
        $f3->set('page','about');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /roadmap',
    function($f3) {
        $f3->set('TITLE','Roadmap');
        $f3->set('page','roadmap');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /law',
    function($f3) {
        $f3->set('TITLE','Law');
        $f3->set('page','law');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /privacy',
    function($f3) {
        $f3->set('TITLE','Privacy Policy');
        $f3->set('page','privacy');
        echo Template::instance()->render('layout.htm');
    }
);

$f3->route('GET /en',
    function($f3) {
        $f3->set('TITLE','English');
        $f3->set('page','en');
        echo Template::instance()->render('layout.htm');
    }
);





$f3->run();
