<?php

namespace Tests;

use App\Http\Controllers\ContactController;
use Tests\TestCase;

class ContactControllerTest extends TestCase
{
    public function testShow()
    {
        $c = new ContactController;
        $result = $c->showMessage(1);
        $this->assertEquals('modified', $result);
    }
}
