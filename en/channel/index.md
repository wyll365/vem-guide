# Channel Operations Guide

A channel account manages the **"factory" side of devices**: device types (slot templates) and device-merchant bindings. Business features such as products, orders, marketing, and alarms all live on the merchant side.

## Channel Home

Dashboard: total devices (with online count), device type count (published ratio), and product type count.

## Device Types (Slot Templates)

Menu: **Device Types**. Defines the slot structure of a class of machines. **Cannot be modified after publishing** - double-check everything before publishing.

![Device Types](/images/channel-device-type.png)

Key points when creating/editing:

- **Slot Matrix**: generate it in one click (enter rows, columns per row, and max stock), or add/remove columns row by row; each slot has a **Code** (the public slot number, default R-row C-col), **Hardware** (the hardware channel No. on the controller board), and **Max Stock** (1-999).
- **Custom Ice Machine (Bulk/Bag Selector)**: when enabled, all devices of this type prompt a bulk ice / bagged ice choice after successful payment; **can only be set before publishing**.
- Click **Save** when done editing, then go back to the list and click **Publish** once everything is confirmed.

## Device Management

Menu: **Devices**. View all devices (IMEI, bound merchant, online status, etc.), with two manual correction actions:

- **Rebind Merchant**: rebind a device to another merchant (normally binding is done on the device itself by entering the merchant registration code; this is a correction tool).
- **Rebind Type**: change a device's device type. ⚠️ **Historical stock not in the new type's slots will be cleaned up after rebinding** - please double-check.

Click **Detail** to view the device profile, running status, location, bound merchant, local config snapshot, slot stock, operation logs, and command records (all read-only on the channel side; config changes are issued by the merchant from their own console).

## Product Types

::: danger Do not touch
This page is for technical maintenance only (it defines product parameter templates). Operations staff must not modify it; contact the tech team if changes are needed.
:::
