const initialOrders = [
    { id: "#FC-1048", customer: "Riya Sharma", total: "₹458", status: "Packing" },
    { id: "#FC-1047", customer: "Arjun Mehta", total: "₹1,230", status: "Ready" },
    { id: "#FC-1046", customer: "Kavya Nair", total: "₹786", status: "Packed" }
];

const monthChart = {
    line: "M12,161 C52,150 75,157 110,142 S172,91 216,112 S278,76 317,88 S368,124 407,96 S467,50 508,66 S574,94 618,61 S650,39 668,42",
    area: "M12,161 C52,150 75,157 110,142 S172,91 216,112 S278,76 317,88 S368,124 407,96 S467,50 508,66 S574,94 618,61 S650,39 668,42 L668,210 L12,210 Z",
    point: [668, 42], total: "₹10.84L", difference: "+14.8% from last month"
};
const weekChart = {
    line: "M12,178 C48,158 66,143 104,148 S164,128 198,141 S252,79 293,94 S343,117 388,100 S438,40 480,56 S536,92 574,72 S637,20 668,36",
    area: "M12,178 C48,158 66,143 104,148 S164,128 198,141 S252,79 293,94 S343,117 388,100 S438,40 480,56 S536,92 574,72 S637,20 668,36 L668,210 L12,210 Z",
    point: [668, 36], total: "₹2.96L", difference: "+8.2% from last week"
};

let orders = [...initialOrders];
let orderNumber = 1049;
let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

function renderOrders() {
    const tableBody = document.getElementById("orderTableBody");
    tableBody.innerHTML = orders.map((order) => `
        <tr>
            <td><strong>${order.id}</strong></td>
            <td>${order.customer}</td>
            <td>${order.total}</td>
            <td><button type="button" class="status ${order.status.toLowerCase()}" data-order="${order.id}">${order.status}</button></td>
        </tr>`).join("");
    document.getElementById("orderBadge").textContent = orders.filter((order) => order.status === "Packing").length;
}

function updateAlertCount() {
    const remaining = document.querySelectorAll("#stockList li").length;
    document.getElementById("alertCount").textContent = `${remaining} ${remaining === 1 ? "item" : "items"}`;
    document.getElementById("notificationButton").querySelector("i").style.display = remaining ? "block" : "none";
}

document.getElementById("newOrderButton").addEventListener("click", () => {
    const newOrder = { id: `#FC-${orderNumber++}`, customer: "Walk-in customer", total: "₹520", status: "Packing" };
    orders.unshift(newOrder);
    document.getElementById("ordersReceived").textContent = Number(document.getElementById("ordersReceived").textContent) + 1;
    document.getElementById("todaySales").textContent = "₹43,380";
    renderOrders();
    showToast(`${newOrder.id} added to the packing queue.`);
});

document.getElementById("markAllPacked").addEventListener("click", () => {
    orders = orders.map((order) => ({ ...order, status: "Packed" }));
    renderOrders();
    showToast("All displayed orders are marked packed.");
});

document.getElementById("orderTableBody").addEventListener("click", (event) => {
    const statusButton = event.target.closest(".status");
    if (!statusButton) return;
    const order = orders.find((item) => item.id === statusButton.dataset.order);
    if (!order || order.status === "Packed") return;
    order.status = order.status === "Packing" ? "Ready" : "Packed";
    renderOrders();
    showToast(`${order.id} is now ${order.status.toLowerCase()}.`);
});

document.getElementById("stockList").addEventListener("click", (event) => {
    const restockButton = event.target.closest(".restock-button");
    if (!restockButton) return;
    const stockItem = restockButton.closest("li");
    showToast(`${stockItem.dataset.item} has been added to the restock list.`);
    stockItem.remove();
    updateAlertCount();
});

document.getElementById("viewInventory").addEventListener("click", () => {
    document.getElementById("inventory").scrollIntoView({ behavior: "smooth", block: "start" });
    showToast("Showing products that need a restock.");
});

document.getElementById("notificationButton").addEventListener("click", () => {
    const remaining = document.querySelectorAll("#stockList li").length;
    showToast(remaining ? `${remaining} inventory alerts need attention.` : "Your inventory alerts are cleared.");
});

document.querySelectorAll(".period-button").forEach((button) => {
    button.addEventListener("click", () => {
        const period = button.dataset.period;
        const chart = period === "month" ? monthChart : weekChart;
        document.querySelectorAll(".period-button").forEach((item) => item.classList.toggle("active", item === button));
        document.getElementById("chartLine").setAttribute("d", chart.line);
        document.getElementById("chartArea").setAttribute("d", chart.area);
        document.getElementById("chartPoint").setAttribute("cx", chart.point[0]);
        document.getElementById("chartPoint").setAttribute("cy", chart.point[1]);
        document.getElementById("chartTotal").textContent = chart.total;
        document.getElementById("chartDifference").textContent = chart.difference;
    });
});

renderOrders();
updateAlertCount();
