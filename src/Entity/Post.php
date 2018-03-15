<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ApiResource
 * @ORM\Table(name="post")
 * @ORM\Entity(repositoryClass="App\Repository\PostRepository")
 */
class Post
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getContribComments()
    {
        return $this->contribComments;
    }

    /**
     * @param mixed $contribComments
     */
    public function setContribComments($contribComments): void
    {
        $this->contribComments = $contribComments;
    }

    /**
     * @return mixed
     */
    public function getPostCategory()
    {
        return $this->postCategory;
    }

    /**
     * @param mixed $postCategory
     */
    public function setPostCategory($postCategory): void
    {
        $this->postCategory = $postCategory;
    }

    /**
     * @return mixed
     */
    public function getPostMedia()
    {
        return $this->postMedia;
    }

    /**
     * @param mixed $postMedia
     */
    public function setPostMedia($postMedia): void
    {
        $this->postMedia = $postMedia;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * @param mixed $nom
     */
    public function setNom($nom): void
    {
        $this->nom = $nom;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description): void
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }

    /**
     * @ORM\Column(type="string")
     */

    public $nom;

    /**
     * @ORM\Column(type="string")
     */

    public $description;
    /**
     * @ORM\Column(type="string")
     */

    public $latitude;
    /**
     * @ORM\Column(type="string")
     */

    public $longitude;
    /**
     * @ORM\Column(type="string")
     */

    public $pict_url;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="posts")
     */
    public $user;

    /** @ORM\OneToMany(targetEntity="UserPostComment", mappedBy="post") */
    protected $contribComments;

    /** @ORM\OneToMany(targetEntity="PostCategory", mappedBy="post") */
    protected $postCategory;
    
    /** @ORM\OneToMany(targetEntity="PostMedia", mappedBy="post") */
    protected $postMedia;
}
