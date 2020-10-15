<?php
/**
 * @package    [PACKAGE_NAME]
 *
 * @author     [AUTHOR] <[AUTHOR_EMAIL]>
 * @copyright  [COPYRIGHT]
 * @license    GNU General Public License version 2 or later; see LICENSE.txt
 * @link       [AUTHOR_URL]
 */

use Joomla\CMS\Factory;
use Joomla\CMS\Language\Text;
use Joomla\CMS\MVC\Controller\BaseController;

defined('_JEXEC') or die;

// Access check.
if (!Factory::getUser()->authorise('core.manage', 'com_kickboilerplate'))
{
	throw new InvalidArgumentException(Text::_('JERROR_ALERTNOAUTHOR'), 404);
}

// Require the helper
require_once JPATH_COMPONENT_ADMINISTRATOR . '/helpers/kickboilerplate.php';

// Execute the task
$controller = BaseController::getInstance('kickboilerplate');
$controller->execute(Factory::getApplication()->input->get('task'));
$controller->redirect();
