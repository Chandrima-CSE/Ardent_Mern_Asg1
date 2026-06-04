//8. Develop a payment status checking system for an online payment project.

function PaymentStatus(status) {
    if (status === "Success") {
        return "Payment completed successfully.";
    } else if (status === "Pending") {
        return "Payment is pending.";
    } else if (status === "Failed") {
        return "Payment failed.";
    } else {
        return "Invalid payment status.";
    }
}

module.exports = PaymentStatus;