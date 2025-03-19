<?php 

class Animal 
{
    const something = "this is something";
    public $name, $age;
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;

        echo "Name is $name and age is $age";
    }

    public function getName()
    {
        echo $this->name;
    }

}

$animal = new Animal('MMT', 23);
$animal->name = "\n myo min thu";
$animal->getName();