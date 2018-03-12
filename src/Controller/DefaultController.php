<?php
/**
 * Created by PhpStorm.
 * User: rolandduboue
 * Date: 11/03/2018
 * Time: 10:44
 */

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function default()
    {
        return $this->render('base.html.twig');
//        return $this->render("index.vue");
    }
}