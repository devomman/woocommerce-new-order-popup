
# WooCommerce New Order Popup
- WooCommerce New Order Popup by DevOmman

**Contributors:** Muhammad Omman 
**Tags:** woocommerce, order notification, popup, sound alert  
**Requires at least:** WordPress 5.0  
**Tested up to:** WordPress 6.3  
**Requires PHP:** 7.0  
**Stable tag:** 1.0  
**License:** GPLv2 or later  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html  

Displays a full-screen popup with sound for new WooCommerce orders. Supports role-based access and custom sound notifications.

## Description

The **WooCommerce New Order Popup** plugin enhances the WooCommerce admin experience by displaying a full-screen popup and playing a sound whenever a new order is received. It is designed to help store administrators and managers stay on top of new orders without constantly refreshing the orders page.

### Key Features:
- **Full-Screen Popup**: Displays a popup with order details (Order ID, Total, and Date).
- **Sound Notification**: Plays a sound for new orders (default or custom base64-encoded sound).
- **Role-Based Access**: Admins can select which user roles receive notifications.
- **Dynamic Settings**: Configure notifications, roles, and sound via the WordPress admin.
- **HPOS Compatibility**: Fully compatible with WooCommerce's High-Performance Order Storage.
- **Persistent Notifications**: Notifications persist even after a browser refresh until acknowledged.
- **Automatic Redirection**: Redirects to the WooCommerce orders page when the user clicks "Accept Orders."

## Installation

1. Download the plugin ZIP file.
2. Go to **WordPress Admin > Plugins > Add New > Upload Plugin**.
3. Upload the ZIP file and click **Install Now**.
4. Activate the plugin.

## Configuration

1. Go to **WordPress Admin > Order Popup**.
2. Configure the following settings:
   - **Enable Popup and Sound**: Toggle notifications on or off.
   - **User Roles**: Select which roles should receive notifications.
   - **Custom Sound (Base64)**: Enter a base64-encoded sound (optional).
3. Click **Save Settings**.

## Frequently Asked Questions

### 1. How do I add a custom sound?
You can paste a base64-encoded sound (e.g., `data:audio/mpeg;base64,...`) in the **Custom Sound (Base64)** field on the settings page.

### 2. Why is the sound not playing automatically?
Modern browsers block autoplay for audio. The sound will play after the user interacts with the page (e.g., clicks anywhere).

### 3. Can I disable notifications for certain roles?
Yes, you can select which roles receive notifications on the settings page.

### 4. Is this plugin compatible with HPOS?
Yes, the plugin is fully compatible with WooCommerce's High-Performance Order Storage (HPOS).

## Changelog

### 1.0
- Initial release.

## Upgrade Notice

### 1.0
- Initial release of the WooCommerce New Order Popup plugin.