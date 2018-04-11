import './NotificationMessage.css';

/**
 * Simple statis class for displaying notifications
 */
class NotificationMessage {
	/**
	 * Creates and returns an notification represented by an aside html element
	 * @param {string} message 
	 * @returns {HTMLElement} The newly created notification
	 */
	static createNotification(message) {
		let notification = document.createElement('article');
		notification.classList.add('NotificationMessage');
		notification.innerHTML = message;

		return notification;
	}

	/**
	 * Returns the notifiacation area where the notifications will be stored.
	 * If the area is not yet created the method will create the container first.
	 * @returns {HTMLElement} The notification area
	 */
	static getNotificationArea() {
		let notificationArea = document.getElementById('NotificationArea');

		if (!notificationArea) {
			notificationArea = document.createElement('aside');
			notificationArea.id = 'NotificationArea';
		}

		document.body.appendChild(notificationArea);

		return notificationArea;
	}

	/**
	 * Shows a success notification on the screen. 
	 * @param {string} message The message to display 
	 */
	static showSuccess(message) {
		let notification = this.createNotification(message);
		let notificationArea = this.getNotificationArea();

		notificationArea.appendChild(notification);
		notification.classList.add('NotificationShow', 'NotificationSuccess');

		this.markNotificationToBeRemoved(notification, notificationArea);
	}

	/**
	 * Shows a warning notification on the screen. 
	 * @param {string} message The message to display 
	 */
	static showWarning(message) {
		let notification = this.createNotification(message);
		let notificationArea = this.getNotificationArea();

		notificationArea.appendChild(notification);
		notification.classList.add('NotificationShow', 'NotificationWarning');

		this.markNotificationToBeRemoved(notification, notificationArea);
	}

	/**
	 * Shows an error notification on the screen. 
	 * @param {string} message The message to display 
	 */
	static showError(message) {
		let notification = this.createNotification(message);
		let notificationArea = this.getNotificationArea();

		notificationArea.appendChild(notification);
		notification.classList.add('NotificationShow', 'NotificationError');

		this.markNotificationToBeRemoved(notification, notificationArea);
	}

	/**
	 * Removes the passed notification after five seconds
	 * @param {HTMLElement} notification The notification to be removed
	 * @param {HTMLElement} notificationArea The notification area from which the notification should be removed
	 */
	static markNotificationToBeRemoved(notification, notificationArea) {
		setTimeout(() => {
			notification.classList.remove('NotificationShow');
			notification.classList.add('NotificationHide');
			setTimeout(() => {
				notificationArea.removeChild(notification);
			}, 1000);
		}, 5000);
	}
}

export default NotificationMessage;