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

    if(item.enhancement < 15) {
      failedItem.durability = (failedItem.durability - 5);
    } else {
      failedItem.durability = (failedItem.durability - 10)
    };

    if(item.enhancement > 16) {
      failedItem.enhancement = (failedItem.enhancement - 1);
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
