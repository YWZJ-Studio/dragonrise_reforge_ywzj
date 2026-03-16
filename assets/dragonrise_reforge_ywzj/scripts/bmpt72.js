function prepareBones() {
    const deltaTime = (context.currentTimeMillis() - context.lastRenderTime()) / 1000;
    const forwardSpeed = context.getForwardSpeed();
    const turnSpeed = context.getTurnSpeed();
    const trackWidth = 3.0 / 20;
    const leftTrackSpeed = (forwardSpeed + turnSpeed * trackWidth / 2) * 20;
    const rightTrackSpeed = (forwardSpeed - turnSpeed * trackWidth / 2) * 20;

    // context.advanceProgress("tread_l_move", "tread_r_move", leftTrackSpeed, rightTrackSpeed, deltaTime, 0.3)
    //
    // for (let i = 0; i <= 7; i++) {
    //     context.rotateBone("wheel_l_" + i, -context.leftWheelDegrees(0.375), 0, 0)
    // }
    // for (let i = 0; i <= 7; i++) {
    //     context.rotateBone("wheel_r_" + i, -context.rightWheelDegrees(0.375), 0, 0)
    // }

    context.rotateBone("turret", 0, -context.getPartYRot("turret"), 0);
    context.rotateBone("bone", -context.getPartXRot("turret"), 0, 0);
}
