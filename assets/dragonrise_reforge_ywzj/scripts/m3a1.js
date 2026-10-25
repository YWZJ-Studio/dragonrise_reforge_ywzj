function steerFrontWheels(context) {
    var speed = context.getForwardSpeed() * 20;
    var turn = context.getTurnSpeed();
    var angle = Math.abs(speed) < 0.05 ? 0 : -Math.atan(turn * 3.50997 / speed) * 180 / Math.PI;
    angle = Math.max(-28, Math.min(28, angle));
    var builder = createPoseBuilder();
    builder.setRotation("wheel_right_1_steer", 0, angle, 0);
    builder.setRotation("wheel_left_1_steer", 0, angle, 0);
    return builder;
}
