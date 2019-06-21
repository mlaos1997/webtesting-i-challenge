module.exports = {
    succeed,
    fail,
    repair,
    get
};

function succeed(item) {
    return { ...item, enhancement: item.enhancement == 20
      ? 20
      : (item.enhancement + 1)};
}

function fail(item) {
    const failedItem = {
        ...item
    };

    return failedItem;
}

function repair(item) {
    return {
        ...item,
        durability: 100
    };
}

function get(item) {
    return {
        ...item
    };
}
