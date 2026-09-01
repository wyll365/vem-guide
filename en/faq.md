# FAQ

## Devices & Stock

**Q: The machine clearly has products, but the slot stock in the console shows 0?**
Slot stock in the console is based on restocking operations. Go to the device's slot page (Device List › Restock), verify the numbers, and use "Update" to correct them.

**Q: A device keeps showing offline?**
First check the device's power and network; once it reconnects, heartbeats are reported automatically and the status turns online. If it stays offline, check the last heartbeat time in the device detail to determine when it disconnected.

**Q: Why does a certain device never raise low-stock alerts?**
That device has no alert threshold set. Go to Device Detail › Edit Profile › Stock Alert Threshold and set a value ≥ 1 (0 means no alerts).

**Q: The slot rows/columns don't match the actual machine?**
The slot structure is defined by the channel's "device type". Merchants cannot add or remove slots; contact the channel to adjust it.

## Orders & Refunds

**Q: A customer says they paid but nothing was dispensed. What should I do?**
Find the order in Orders (filtering by device name + time is recommended), click "Dispense Flow" to check the log and locate which step failed; once you confirm nothing was dispensed, click "Refund" to refund via the original payment route.

**Q: Why do some orders have no refund button?**
Only **QR-code payment** orders in Paid / Dispensing / Dispensed / Dispense Error status that still have a refundable balance can be refunded online. Cash / card / free orders are not supported.

**Q: The report revenue doesn't match my own tally?**
The report's "revenue amount" is **net income after refunds**, and the order count includes refunded orders, so dividing one by the other does not equal the average order value - that is normal.

## Marketing

**Q: I entered 10 for a discount promotion - why did it become 90% off?**
The "discount" field is the percentage the customer pays: enter 90 for 10% off, 50 for 50% off.

**Q: Promo codes are already distributed, but I want to change the rules?**
The codes themselves cannot be changed, but you can edit the **promotion** (threshold / discount value / usage limit); all issued codes follow the new rules immediately. To stop them entirely, turn off the promotion's "Enabled" switch or void the codes.

**Q: A customer says the promo code can't be entered / shows invalid?**
Check in order: whether the promotion is enabled, whether it is within the validity period, whether the device is in the applicable scope, and whether the code has been used up or voided. Also, 5 consecutive wrong entries on the same machine lock it for 10 minutes.

## Screens & Templates

**Q: I changed the screen design, but nothing changed on the machine?**
Confirm the template is saved and the device is bound to it, then send the "Refresh Template" command from Device Detail › Device Console.
