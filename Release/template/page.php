<?php get_header(); ?>
						<?php if (have_posts()) : ?>
							<?php while (have_posts()) : the_post(); ?>
										
									<?php
										the_content();
									?>
							<?php endwhile; ?>
							<?php if (next_posts_link() || previous_posts_link()): ?>
								<?php next_posts_link('&laquo; Older Entries') ?> | 
								<?php previous_posts_link('Newer Entries &raquo;') ?>
							<?php endif ?>
						<?php else : ?>
							<h2>Not Found</h2>
							<p>Sorry, but you are looking for something that isn't here.</p>
							<?php get_search_form(); ?>
						<?php endif; ?>
				<?php get_footer(); ?>