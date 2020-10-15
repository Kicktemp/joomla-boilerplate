<?php

defined('_JEXEC') or die;

class plgInstallerKicktemp extends JPlugin
{
    public function onInstallerBeforePackageDownload(&$url, &$headers)
    {
        if (parse_url($url, PHP_URL_HOST) == 'kicktemp.shop') {

            if ($key = $this->params->get('apikey')) {

                $pos = strpos($url, '?');

                if ($pos === false) {
                    $url .= "?k=$key";
                } else {
                    $url = substr_replace($url, "?k=$key&", $pos, 1);
                }
            } else {

                // load default and current language
                $jlang = JFactory::getLanguage();
                $jlang->load('plg_installer_kicktemp', JPATH_ADMINISTRATOR, 'en-GB', true);
                $jlang->load('plg_installer_kicktemp', JPATH_ADMINISTRATOR, null, true);

                // warn about missing api key
                JFactory::getApplication()->enqueueMessage(JText::_('PLG_INSTALLER_KICKTEMP_API_KEY_WARNING'), 'notice');
            }

        }

        return true;
    }
}
