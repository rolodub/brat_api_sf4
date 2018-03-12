<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource
 * @ORM\Entity(repositoryClass="App\Repository\PostMediaRepository")
 */
class PostMedia
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Post", inversedBy="postMedia")
     * @ORM\JoinColumn(name="post_id", referencedColumnName="id", nullable=false)
     */
    protected $post;

    /**
     *
     * @ORM\ManyToOne(targetEntity="Media", inversedBy="postMedia")
     * @ORM\JoinColumn(name="media_id", referencedColumnName="id", nullable=false)
     */
    protected $media;

}
