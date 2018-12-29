<?php /* Template Name: Template for About-us page */ ?>
<?php get_header(); ?>
<?php get_template_part('template-parts/row-header'); // показали верхнюю секцию ?>
    <article <?php post_class(); ?> id="post-<?php the_ID(); ?>">
  <div class='container'>

  <?php get_template_part('template-parts/log-in'); // показали тело ?>

  <?php get_template_part('template-parts/row-footer'); // показали нижнюю секцию ?>
  </div>
  </article>
<?php get_footer(); ?>