function updateBones(context) {
    const previousPropellerRotation = context.getFloat("propellerRotation", 0);
    const propellerRotation = (previousPropellerRotation + context.getPower() / 10) % 360;
    context.setFloat("propellerRotation", propellerRotation)

    const builder = createPoseBuilder();
    // 双旋翼
    builder.setRotation("1", 0, propellerRotation, 0);
    builder.setRotation("2", 0, -propellerRotation, 0);

    // 机炮
    builder.setRotation("auto_cannon", -context.getPartXRot("auto_cannon"), -context.getPartYRot("auto_cannon"), 0);

    // 操作杆
    let d1 = 0;
    let d2 = 0;
    const control = context.getControlUnit();
    if (control.left || control.right) {
        d1 = control.left ? 10 : -10;
    }
    if (control.forward || control.backward) {
        d2 = control.forward ? -10 : 10;
    } else {
        d2 = Math.max(-10, Math.min(10, -(control.xRot - context.getXRot()) / 30 * 10));
    }
    builder.setRotation("czg", d2, 0, d1);
    builder.setRotation("zjg", context.getCollectivePitch() / 100 * 20, 0, 0);

    return builder
}
