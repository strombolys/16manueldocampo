<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'manueldocampobd');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '*UX8iC{=Kx;Q_ 5fu2Iq4mn^F}HvRdtCOYVCT?eda?9k`3JMWBVfeRK; B|#9hBg');
define('SECURE_AUTH_KEY',  '>VOP%n_]ZX;R}T(it_sz!{O8uxhL5TBphx U~W;j6Ir}7T*R87RBab7>W*>I$=@N');
define('LOGGED_IN_KEY',    'AU0y&Y>/pu],|IXen&1Zc$_y:;GI~:!Tb.$Yc]^ I,.uqn,0#&^k>l,~(6=R)27>');
define('NONCE_KEY',        'wju@ilI(Oi6e!/S/#@*U1mIpS.Zo@`,(GXO[gIKQ5P@)S_q3JotyRY-Vpsl!;gt<');
define('AUTH_SALT',        'yo[,l?*/-6^*9&47[fovI]tJSj7W#7J-$_Xq^k;dJthIQ1d1&SWdr&*yp~6J1sFw');
define('SECURE_AUTH_SALT', 'q{C3EGjFt/K;DBomuc~tC%Cfk7DE 8At0JfM-;AjZGg6XgPY_(N{bhEpG;mc`@`M');
define('LOGGED_IN_SALT',   '66Rj8fZ2KBku;=$zymiE[@f@N7Eh(p=Mt+>omSBy0NQ@ ?/J4%?O?~w*@yHD{)xo');
define('NONCE_SALT',       'G.suF2$2#>fyI0LZ=Yn3p%MKhZlr~o[9=9.`f3iWLE`cm4pdh<x6E,BlWQ*/f*5>');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
