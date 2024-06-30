<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EcommerceFeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $feedbacks = [
            ['name' => 'John Doe', 'comments' => '3D e-commerce websites offer an immersive shopping experience.'],
            ['name' => 'Jane Smith', 'comments' => 'They provide a better visualization of products.'],
            ['name' => 'Alice Johnson', 'comments' => '3D websites can boost customer engagement.'],
            ['name' => 'Robert Brown', 'comments' => 'They help in making informed purchasing decisions.'],
            ['name' => 'Emma Wilson', 'comments' => 'Such websites enhance user interaction.'],
            ['name' => 'Olivia Taylor', 'comments' => 'They offer a unique and modern shopping experience.'],
            ['name' => 'Liam Davis', 'comments' => '3D e-commerce websites can increase conversion rates.'],
            ['name' => 'Sophia Martinez', 'comments' => 'They allow customers to see products from all angles.'],
            ['name' => 'James Anderson', 'comments' => 'They can reduce return rates by providing better product understanding.'],
            ['name' => 'Isabella Thomas', 'comments' => '3D technology in e-commerce is the future of online shopping.'],
            ['name' => 'Mia Jackson', 'comments' => 'They provide a more engaging and interactive shopping experience.'],
            ['name' => 'Benjamin White', 'comments' => '3D websites can enhance the overall user experience.'],
            ['name' => 'Charlotte Harris', 'comments' => 'They help in differentiating brands from competitors.'],
            ['name' => 'William Martin', 'comments' => '3D e-commerce sites can increase customer satisfaction.'],
            ['name' => 'Amelia Thompson', 'comments' => 'They offer a more realistic representation of products.'],
            ['name' => 'Evelyn Garcia', 'comments' => 'Such websites can attract tech-savvy customers.'],
            ['name' => 'Lucas Martinez', 'comments' => 'They improve the online shopping experience significantly.'],
            ['name' => 'Harper Robinson', 'comments' => '3D e-commerce sites are more engaging for users.'],
            ['name' => 'Ella Clark', 'comments' => 'They provide detailed product visualization.'],
            ['name' => 'Mason Rodriguez', 'comments' => '3D websites offer a competitive edge in the market.'],
            ['name' => 'Avery Lewis', 'comments' => 'They make online shopping more interactive.'],
            ['name' => 'Jack Walker', 'comments' => '3D technology can improve customer retention.'],
            ['name' => 'Lily Hall', 'comments' => 'They enhance the digital shopping experience.'],
            ['name' => 'Henry Allen', 'comments' => '3D e-commerce sites are the next big thing in online retail.'],
            ['name' => 'Abigail Young', 'comments' => 'They provide a more engaging user experience.'],
        ];

        foreach ($feedbacks as $feedback) {
            DB::table('ecommerce_feedback')->insert([
                'name' => $feedback['name'],
                'comment' => $feedback['comments'],
            ]);
        }
    }
}
